import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { DatObjekPajak } from "./DatObjekPajak";
import { RefKelurahan } from "./RefKelurahan";
import { DatPetaZnt } from "./DatPetaZnt";

@Index("d4_1_ak", ["kdBlok", "kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "statusPetaBlok"], { unique: true })
@Index("dat_peta_blok_pkey", ["kdBlok", "kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi"], { unique: true })
@Entity("dat_peta_blok", { schema: "public" })
export class DatPetaBlok {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "kd_blok", length: 3 })
  kdBlok!: string;

  @Column("smallint", { name: "status_peta_blok", default: () => "0" })
  statusPetaBlok!: number;

  @OneToMany(() => DatObjekPajak, (datObjekPajak) => datObjekPajak.datPetaBlok)
  datObjekPajaks!: DatObjekPajak[];

  @ManyToOne(() => RefKelurahan, (refKelurahan) => refKelurahan.datPetaBloks)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
    { name: "kd_kecamatan", referencedColumnName: "kdKecamatan" },
    { name: "kd_kelurahan", referencedColumnName: "kdKelurahan" },
  ])
  refKelurahan!: RefKelurahan;

  @OneToMany(() => DatPetaZnt, (datPetaZnt) => datPetaZnt.datPetaBlok)
  datPetaZnts!: DatPetaZnt[];
}
