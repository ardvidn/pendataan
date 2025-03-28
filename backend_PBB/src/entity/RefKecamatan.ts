import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { RefDati2 } from "./RefDati2";
import { RefKelurahan } from "./RefKelurahan";

@Index("ref_kecamatan_pkey", ["kdDati2", "kdKecamatan", "kdPropinsi"], {
  unique: true,
})
@Index("a3_1_ak", ["kdDati2", "kdKecamatan", "kdPropinsi", "nmKecamatan"], {
  unique: true,
})
@Entity("ref_kecamatan", { schema: "public" })
export class RefKecamatan {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character varying", { name: "nm_kecamatan", length: 30 })
  nmKecamatan!: string;

  @ManyToOne(() => RefDati2, (refDati2) => refDati2.refKecamatans)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
  ])
  refDati!: RefDati2;

  @OneToMany(() => RefKelurahan, (refKelurahan) => refKelurahan.refKecamatan)
  refKelurahans!: RefKelurahan[];
}
