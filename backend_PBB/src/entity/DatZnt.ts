import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { DatNir } from "./DatNir";
import { DatPetaZnt } from "./DatPetaZnt";
import { RefKelurahan } from "./RefKelurahan";

@Index("d1_1_ak", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "kdZnt"], { unique: true })
@Index("dat_znt_pkey", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "kdZnt"], { unique: true })
@Entity("dat_znt", { schema: "public" })
export class DatZnt {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "kd_znt", length: 2 })
  kdZnt!: string;

  @OneToMany(() => DatNir, (datNir) => datNir.datZnt)
  datNirs!: DatNir[];

  @OneToMany(() => DatPetaZnt, (datPetaZnt) => datPetaZnt.datZnt)
  datPetaZnts!: DatPetaZnt[];

  @ManyToOne(() => RefKelurahan, (refKelurahan) => refKelurahan.datZnts)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
    { name: "kd_kecamatan", referencedColumnName: "kdKecamatan" },
    { name: "kd_kelurahan", referencedColumnName: "kdKelurahan" },
  ])
  refKelurahan!: RefKelurahan;
}
