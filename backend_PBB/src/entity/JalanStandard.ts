import { Column, Entity, Index } from "typeorm";

@Index("d3_2_ak", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "nmJlnSementara"], { unique: true })
@Index("jalan_standard_pkey", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "nmJlnSementara"], { unique: true })
@Index("d3_1_ak", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "nmJlnStandard"], {})
@Entity("jalan_standard", { schema: "public" })
export class JalanStandard {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character varying", {
    primary: true,
    name: "nm_jln_sementara",
    length: 30,
  })
  nmJlnSementara!: string;

  @Column("character varying", {
    name: "nm_jln_standard",
    nullable: true,
    length: 30,
  })
  nmJlnStandard!: string | null;
}
