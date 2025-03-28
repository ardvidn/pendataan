import { Column, Entity, Index } from "typeorm";

@Index("dafnom_gelondongan_pkey", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "thnPembentukan"], { unique: true })
@Entity("dafnom_gelondongan", { schema: "public" })
export class DafnomGelondongan {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "thn_pembentukan", length: 4 })
  thnPembentukan!: string;

  @Column("bigint", { name: "jumlah_gelondongan", nullable: true })
  jumlahGelondongan!: string | null;

  @Column("bigint", { name: "jumlah_sismiop", nullable: true })
  jumlahSismiop!: string | null;

  @Column("bigint", { name: "saldo_gelondongan", nullable: true })
  saldoGelondongan!: string | null;

  @Column("bigint", { name: "jumlah_lembar", nullable: true })
  jumlahLembar!: string | null;
}
