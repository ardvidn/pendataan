import { Column, Entity, Index } from "typeorm";

@Index("tarif_pkey", ["kdDati2", "kdPropinsi", "njopMin", "thnAkhir", "thnAwal"], { unique: true })
@Entity("tarif", { schema: "public" })
export class Tarif {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_awal", length: 4 })
  thnAwal!: string;

  @Column("character", { primary: true, name: "thn_akhir", length: 4 })
  thnAkhir!: string;

  @Column("bigint", { primary: true, name: "njop_min" })
  njopMin!: string;

  @Column("bigint", { name: "njop_max" })
  njopMax!: string;

  @Column("numeric", { name: "nilai_tarif", precision: 3, scale: 3 })
  nilaiTarif!: string;
}
